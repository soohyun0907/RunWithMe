package kr.co.rwm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Gugun;
import kr.co.rwm.entity.Sido;
import kr.co.rwm.repo.GugunRepository;
import kr.co.rwm.repo.SidoRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class AreaServiceImpl implements AreaService {

	private final SidoRepository sidoRepository;
	private final GugunRepository gugunRepository;
	
	@Override
	public List<Sido> findAllSido() {
		return sidoRepository.findAll();
	}
	
	@Override
	public List<Gugun> findAllGugunBySidoId(Sido sido) {
		return gugunRepository.findAllBySidoId(sido);
	}

	@Override
	public Sido findSidoBySidoId(int sidoId) {
		return sidoRepository.findBySidoId(sidoId);
	}

	@Override
	public Gugun findGugunByGugunId(int gugunId) {
		return gugunRepository.findByGugunId(gugunId);
	}
	
}
