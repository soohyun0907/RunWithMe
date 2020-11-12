package kr.co.rwm.dto;

import java.io.Serializable;

import kr.co.rwm.entity.Sido;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

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
