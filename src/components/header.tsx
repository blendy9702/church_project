export default function Header() {
    return (
      <header>
        <div className="flex justify-between items-center bg-amber-900">
          <div>DASHBOARD</div>
          <div>검색</div>
          <div className="flex gap-4">
            <div>메시지</div>
            <div>알림</div>
            <div>설정</div>
            <div>프로필</div>
          </div>
        </div>
      </header>
    );
  }