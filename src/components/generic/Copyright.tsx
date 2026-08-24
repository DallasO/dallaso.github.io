export default function Copyright() {
  const d = new Date().getFullYear();
  const copyright = d > 2019 ? `2019-${d}` : d;
  return <div className="copyright">&copy;&nbsp;{copyright}</div>;
}
