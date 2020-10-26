package kr.co.rwm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
