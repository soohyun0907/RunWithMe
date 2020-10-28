package kr.co.rwm.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Reply;

public interface ReplyRepository extends JpaRepository<Reply, Long> {

	Optional<Reply> findByReplyId(int parseInt);


	Long deleteByReplyId(int reply_id);

}
