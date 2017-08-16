function * gen(){
  a=yield 1
  console.log(a)

  b=yield 2
  console.log(b)

  c=yield 3
  console.log(c)
}

iter = gen()

iter.next('x') //== 1
iter.next('y') //== 2
iter.next('z') //== 3
iter.next('end') //== undefined

`
function * gen(){
    ----------暂停，需要next（x）才会继续执行
  1. 扔出1
  ----------暂停，需要next（y）才会继续执行
  2. 计算yield 1
  3. 赋值a =yield 1
  4. console.log(a)
  1. 扔出2
  ----------暂停，需要next（z）才会继续执行
  2. 计算yield 2
  3. b=yield 2
  4. console.log(b)
  1. 扔出3
  ----------暂停，需要next（end）才会继续执行
  2. 计算yield 3
  3. c=yield 3
  4. console.log(c)
  。。。undefined
}`