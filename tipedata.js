const tipedata = (params) =>{

let tipe = typeof params;
    if (Array.isArray(params)) {
       tipe = 'array'
    }

    console.log("paramater " + params + " adalah " + tipe + "!");
    
}

tipedata("jancuk")
tipedata(1)
tipedata([1,2,2])
tipedata({anjay : "aaa"})
tipedata(true)