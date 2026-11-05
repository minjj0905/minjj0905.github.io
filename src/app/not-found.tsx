import Link from 'next/link';

const NotFound = () => (
  <div className="py-16">
    <h1 className="text-xl font-semibold">아무것도 없는 것 같아요..!</h1>
    <p className="mt-2 text-text-secondary">주소가 변경되었거나 삭제된 페이지입니다.</p>
    <Link href="/" className="mt-6 inline-block text-sm text-primary underline underline-offset-2">
      홈으로 돌아가기
    </Link>
  </div>
);

export default NotFound;
