package kr.co.rwm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Message;

public interface MessageRepository extends JpaRepository<Message, Long>{

	List<Message> findAllByRoomId(int roomId);

}
