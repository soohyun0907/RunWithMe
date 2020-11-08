package kr.co.rwm.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Ranks;
import kr.co.rwm.entity.User;

public interface RanksRepository extends JpaRepository<Ranks, Long>{
	Optional<Ranks> findByRankId(int rankId);
	Optional<Ranks> findByUserId(User userId);
	List<Ranks> findTop10ByOrderByRaceExpDesc();
	List<Ranks> findTop10ByOrderByDonateExpDesc();
	List<Ranks> findTop10ByOrderByTotalExpDesc();
	List<Ranks> findAllByOrderByTotalExpDesc();
	List<Ranks> findByTier(int tier);
	
}
