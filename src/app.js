let pronoun = ['the','our', 'his'];
let adj = ['great', 'big', 'ugly', 'pretty' ];
let noun = ['jogger','racoon'];
let domain=['.com', '.net', '.org', 'us', 'io']

function ramdomURL(a, b, c, d)
{
  for(i=0; i<a.length; i++){
    for(j=0; j<b.length; j++){
      for(k=0; k<c.length; k++){
        for(l=0; l<d.length; l++){
          console.log(a[i]+b[j]+c[k]+d[l])
        }
      }
    }
  }
}
ramdomURL(pronoun, adj, noun, domain)