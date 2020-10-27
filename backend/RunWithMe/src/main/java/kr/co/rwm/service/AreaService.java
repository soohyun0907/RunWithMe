package kr.co.rwm.service;

import java.util.List;

import kr.co.rwm.entity.Gugun;
import kr.co.rwm.entity.Sido;

public interface AreaService {

	public List<Gugun> findAllGugunBySidoId(Sido sido);

	public List<Sido> findAllSido();
	
	public Sido findSidoBySidoId(int sidoId);
	
	public Gugun findGugunByGugunId(int gugunId);
}
