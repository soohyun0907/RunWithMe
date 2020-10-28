package kr.co.rwm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Sido implements Serializable {
   
   /**
    * Redis에 올리려면 Serializable 필요
    */
   private static final long serialVersionUID = 13L;

   @Id
   @Column(name = "sido_id")
   private Integer sidoId;
   
   @Column(name = "sido_name")
   private String sidoName;
   
}