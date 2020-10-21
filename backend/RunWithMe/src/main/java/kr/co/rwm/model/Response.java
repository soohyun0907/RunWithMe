package kr.co.rwm.model;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Response<T> {

    private int status;

    private String message;

    private T data;

    public Response(final int status, final String message) {
        this.status = status;
        this.message = message;
        this.data = null;
    }

    public static<T> Response<T> res(final int status, final String message) {
        return res(status, message, null);
    }

    public static<T> Response<T> res(final int status, final String message, final T t) {
        return Response.<T>builder()
                .data(t)
                .status(status)
                .message(message)
                .build();
    }
}