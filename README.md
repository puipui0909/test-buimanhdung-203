# Giải thích logic Play/Pause khi cuộn

Ứng dụng sử dụng `IntersectionObserver API` để theo dõi trạng thái hiển thị của từng video trên màn hình.

Mỗi `VideoCard` sẽ tạo một `IntersectionObserver` và đăng ký theo dõi phần tử `<video>` tương ứng.

```typescript
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  },
  {
    threshold: 0.7,
  }
);
```

Khi người dùng cuộn trang:

 Nếu video xuất hiện trong viewport và đạt ngưỡng hiển thị 70%, `entry.isIntersecting` sẽ bằng `true` và video được phát bằng `video.play()`.
 Nếu video không còn đạt ngưỡng hiển thị hoặc bị cuộn ra khỏi màn hình, `entry.isIntersecting` sẽ bằng `false` và video được tạm dừng bằng `video.pause()`.

Luồng xử lý:

```text
Người dùng cuộn
        ↓
IntersectionObserver phát hiện thay đổi
        ↓
Video xuất hiện ≥ 70% trong viewport
        ↓
video.play()

Video bị cuộn khỏi viewport
        ↓
video.pause()
```

Ngoài việc tự động Play/Pause khi cuộn, người dùng cũng có thể nhấn trực tiếp vào video để chuyển đổi giữa trạng thái phát và tạm dừng thông qua sự kiện `onClick`.

Để tối ưu hiệu năng khi số lượng video lớn, danh sách được thiết kế theo hướng có thể áp dụng Virtualization. Chỉ các video nằm gần viewport mới được render và theo dõi bởi IntersectionObserver, giúp giảm số lượng phần tử DOM và lượng bộ nhớ sử dụng.
