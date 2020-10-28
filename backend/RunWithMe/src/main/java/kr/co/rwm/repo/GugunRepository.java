package kr.co.rwm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Gugun;
import kr.co.rwm.entity.Sido;

public interface GugunRepository extends JpaRepository<Gugun, Long> {

	List<Gugun> findAllBySidoId(Sido sido);

	Gugun findByGugunId(int gugunId);

}
