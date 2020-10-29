package kr.co.rwm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long>{
	
}
