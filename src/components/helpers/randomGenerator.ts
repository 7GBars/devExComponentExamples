let seed = 123456789;
export function linearCongruentialGenerator() {
  const a = 1103515245;
  const c = 12345;
  const m = 2147483647;
  seed = (a * seed + c) % m;
  return seed % (10 - 1);
}