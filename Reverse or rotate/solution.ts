export function solve(s:string, sz:number): string {
    if(sz <= 0 || sz > s.length || !s) return ''
    
    let arr: string[] = []
      
    s.match(new RegExp('.{1,' + sz + '}', 'g'))!.map(val => {
      if(val.length != sz) return
      if(val.split('').reduce((a,b) => Number(a) + Number(b), 0) % 2 == 0) arr.push(val.split('').reverse().join('')) 
      else arr.push(val.slice(1) + val.slice(0, 1)) 
    })
    
    return arr.join('')
  }