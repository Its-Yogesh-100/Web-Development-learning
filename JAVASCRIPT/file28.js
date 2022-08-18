// PRIMITIVE VS REFERENCE DATA TYPES IN 

 let n1=10;
 let n2=n1;
 console.log(" before increment n1 is ",n1);
 console.log(" before increment n2 is ",n2);
 n1++;
 console.log(" before increment n1 is ",n1);
 console.log(" before increment n2 is ",n2);
 

 // Reference type
 // 1 array

 let arr1=["item1","item2"];
 let arr2=arr1;
 console.log("arr1 ",arr1);
 console.log("arr2 ",arr2);

 arr1.push("item3");
 console.log("arr1 ",arr1);
 console.log("arr2 ",arr2);