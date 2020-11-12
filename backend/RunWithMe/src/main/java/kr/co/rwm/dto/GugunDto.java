package kr.co.rwm.dto;

import java.io.Serializable;

import kr.co.rwm.entity.Sido;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class GugunDto implements Serializable {

   /**
    * 
    */
   private static final long serialVersionUID = 11L;

   private Integer gugunId;
   
   private String gugunName;
   
   private Sido sidoId;
   
}
