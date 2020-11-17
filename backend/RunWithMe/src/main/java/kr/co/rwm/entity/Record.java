package kr.co.rwm.entity;

import java.io.Serializable;

import javax.persistence.FetchType;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
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
public class Record implements Serializable {
   
   /**
    * Redis에 올리려면 Serializable 필요
    */
   private static final long serialVersionUID = 17L;

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "record_id")
   private Integer recordId;

   @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
   @ManyToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "running_id")
   private Running runningId;

   @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
   @ManyToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "user_id", nullable = true)
   private User userId;
   
   @Column(name = "accumulated_distance", nullable = false)
   private double accDistance;
   
   @Column(name = "accumulated_time", nullable = false)
   private Long accTime;
   
   @Column(name = "speed")
   private double speed;
   
}