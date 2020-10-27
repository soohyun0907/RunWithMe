package kr.co.rwm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Sido;

public interface SidoRepository extends JpaRepository<Sido, Long> {

	Sido findBySidoId(int sidoId);

}
