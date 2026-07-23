import Link from 'next/link';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center py-24 text-center">
    <p className="font-gmarket text-6xl font-bold text-primary">404</p>
    <h1 className="mt-4 text-xl font-semibold">페이지를 찾을 수 없습니다</h1>
    <p className="mt-2 text-text-secondary">주소가 변경되었거나 삭제된 페이지입니다.</p>
    <Link
      href="/"
      className="glass mt-8 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary/30"
    >
      홈으로 돌아가기
    </Link>
  </div>
);

export default NotFound;
