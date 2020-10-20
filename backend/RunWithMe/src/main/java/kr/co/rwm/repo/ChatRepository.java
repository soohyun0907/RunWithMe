package kr.co.rwm.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Chat;

public interface ChatRepository extends JpaRepository<Chat, Long> {

	Optional<Chat> findByMasterIdAndGuestId(Integer integer, String guestName);

}
