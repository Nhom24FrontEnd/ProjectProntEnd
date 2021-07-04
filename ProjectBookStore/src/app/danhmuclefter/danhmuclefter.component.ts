import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhmuclefter',
  templateUrl: './danhmuclefter.component.html',
  styleUrls: ['./danhmuclefter.component.css']
})
export class DanhmuclefterComponent implements OnInit {
danhmuc? : any[];
  constructor() { }

  ngOnInit(): void {
    this.danhmuc=[
      [['Sách văn học'], ['Tiểu thuyết','Truyện ngắn','Ngôn tình','Light Novel','Tác phẩm kinh điển','Huyền bí - Giả tưởng - Kinh dị',
        'Thơ ca - Ca dao - Tục ngữ - Thành ngữ']],
      [['Sách kinh tế '], ['Quản trị - Lãnh đạo','Nhân vật - Bài học kinh doanh','Marketing - Bán hàng','Phân tích kinh tế',
      'Khởi nghiệp  - Làm giàu','Tài chính -Ngân hàng','Chứng khoán - Bất động sản - Đầu tư','Kế toán - Kiểm toán - Thuế']],
      [['Sách thiếu nhi '],['Truyện thiếu nhi','Kiến thức bách khoa','Ký năng sống cho trẻ','Tô màu - Luyện chữ','Từ điển thiếu nhi',
      'Tạp chí thiếu nhi','Flashcard - Thẻ học thông minh','Sách nói']],
      [['Kỷ năng - Đời sống '],['Kỷ năng sống','Sách cho tuổi mới lớn','Tâm lý','Rèn luyện nhân cách',
        'Hạt giống tâm hồn']],
      [['Sách ngoại ngữ '],['Sách học tiếng Anh', ' Sách học tiếng Hàn', ' Sách học tiếng Nhật', 'Sách học tiếng Trung', 'Sách học tiếng Nga',
        'Sách học tiếng Pháp']],
      [['Sách công nghệ '],['Sách động cơ', ' Công nghệ máy tính', ' Công nghệ ô tô']],
      [['Giáo khoa  - Tham khảo'],['Giáo khoa cấp 1', ' Giáo khoa cấp 2', ' Giáo khoa cấp 3','Mẫu giáo','Đại học',
      'Sách giáo viên','Sách giáo viên']],
      [['Sách sinh học '],['Sách nông - Lâm - Nghiệp', ' Chuyên gia súc', 'Sách trông cây lâm nghiệp','Sách trông rau củ','Phân tích đất trồng',
      'Sách đột biến']],
      [['Từ điển'],['Từ điển Anh - Việt', 'Từ điển Anh - Anh', ' Từ điển Hàn - Việt','Từ điển Hán - Việt','Từ điển Nga - Việt',
      'Từ điển Pháp - Việt','Một số từ điển khác']]
    ];
  }

}
