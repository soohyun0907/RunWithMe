package kr.co.rwm.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Matching;

public interface MatchRepository extends JpaRepository<Matching, Long> {

	Optional<Matching> findByMasterIdAndGuestId(Integer master_id, Integer guest_id);

}
