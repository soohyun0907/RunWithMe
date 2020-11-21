<template>
  <div class="card-body bg-white mt-0 shadow" style="height: 65vh">
    <p style="font-weight: bold" align="center">마 일 리 지 충 전 소</p>
    <img
      src="@/assets/images/faces/kakao.jpg"
      style="height: 38vh; padding-bottom: 15px"
      align="left"
    />

    <h5>현재 마일리지 : {{ userInfo.mileage | makeComma}} 원</h5>
    <div align="left">
      <input
        style="width: 28vh; float: left"
        type="text"
        class="form-control form-control-rounded"
        placeholder="            충전 금액 입력"
        name="money"
        id="money"
        v-model="money"
      />
      <!-- <p style="font-weight: bold; float:left; font-size:20px; padding-left:5px"> 마일리지</p> -->
      <!-- <div style="padding-top: 10px"> -->
      <div style="float: left; padding-left: 5px">
        <button
          @click="chargeKakao"
          type="button"
          class="btn btn-icon btn-rounded btn-primary"
          style="width: 15vh; background-color: #f7d358"
          id="charge_kakao"
        >
          충전하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mobileModel } from "mobile-device-detect";
import { mapGetters, mapMutations } from "vuex";
import http from "@/utils/http-common";

export default {
  data() {
    return {
      money: "",
      isMobile: "",
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    this.$store.commit("closeSidebar");
    // console.log(this.userInfo);
  },
  created: function () {
    var filter = "win16|win32|win64|mac|macintel";
    if (navigator.platform) {
      if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
        //mobile
        this.isMobile = true;
      } else {
        //pc
        this.isMobile = false;
      }
    }
  },
  methods: {
    ...mapMutations(["mutateMyRunning", "closeSidebar"]),
    chargeKakao() {
      if (!this.isMobile) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '모바일에서만 충전 가능합니다.',
        }).then((result) => {
          if (result.isConfirmed) {
            document.location.href = "/app/apps/payment";
          }
        })
      } else {
        var IMP = window.IMP;
        IMP.init("imp42556076");
        var money = this.money;
        money = parseInt(money);
        IMP.request_pay(
          {
            pg: "kakaopay",
            pay_method: "card",
            merchant_uid: "merchant_" + new Date().getTime(),
            name: "RWM",
            amount: money,
            buyer_email: this.userInfo.userEmail,
            buyer_name: this.userInfo.username,
            buyer_tel: "010-1234-5678",
            buyer_addr: this.userInfo.gugunId.sidoId.sodoName + this.userInfo.gugunId.gugunName,
            buyer_postcode: "123-456",
          },
          function (rsp) {
            if (rsp.success) {
              var msg = "결제가 완료되었습니다.";
              // msg += "고유ID : " + rsp.imp_uid;
              // msg += "상점 거래ID : " + rsp.merchant_uid;
              // msg += "결제 금액 : " + rsp.paid_amount;
              // msg += "카드 승인번호 : " + rsp.apply_num;

              http
                .get(`payment/charge/${money}`)
                .then(({data}) => {
                  // alert(msg);
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: msg,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  http
                    .get('users/')
                    .then(res => {
                      this.$store.commit('mutateUserInfo',res.data.data.userId)
                      this.$store.commit('mutateUserTotal',res.data.data)
                      localStorage.setItem("userInfo",JSON.stringify(res.data.data))
                    })
                  setTimeout(() => {
                    document.location.href = "/app/apps/paymentDone"; //챌린지 참여 목록으로 이동?
                  }, 1500);
                })
                .catch((error) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '결제에 실패하였습니다.'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      document.location.href = "/app/apps/payment";
                    }
                  })
                });
            } else {
              var msg = rsp.error_msg;
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: msg
              }).then((result) => {
                if (result.isConfirmed) {
                  document.location.href = "/app/apps/payment";
                }
              })
            }
          }
        );
      }
    },
  },
};
</script>
