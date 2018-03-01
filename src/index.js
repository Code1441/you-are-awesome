// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => 
	Object.defineProperty(this,arguments[0],{
    enumerable: true
});

const createNotEnumerableProperty = (prop) =>   {
    var symbol =  Symbol(prop);
    return symbol;
};

const createProtoMagicObject = () => {
    function Magic(){};
    Magic.prototype= Object.getPrototypeOf(Magic);
    var obj = Magic;
    return obj;
};



const incrementor = () => {
    var count = incrementor.data+1 || 1;
    f =( ) => {
        count++;
        incrementor.data = count;
        return f;
    }

    f.toString = ()=> count;

    return f;
}


function asyncIncrementor() {
    var count = asyncIncrementor.data || 0;
    f =( ) => {
        count++;
        asyncIncrementor.data = count;
        return count;
    }

    f.toString = ()=> count;

    return f();
}
const createIncrementer = () => {
    return {
        startPoint:1,
        endPoint: Infinity,

        [Symbol.iterator](){
            return this;
        },
        next(){
          if(this.current === undefined){
              this.current = this.startPoint;
          }
          if(this.current < this.endPoint){
              return {
                  done: false,
                  value: this.current++
              }
          }
          if(this.current == this.endPoint){
              return {
                  done: true
              }
          }
        }
    }
}


// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(param);
        }, 1000);
    })
};
const getDeepPropertiesCount = (obj) => {
    if (Object.keys(obj).length === 1) {
        for(var pole in obj){
            if(typeof obj[pole] !== 'object') return 1;
        }
    }
    var count = Object.keys(obj).length, result;
    for (var pole in obj) {
        if (obj.hasOwnProperty(pole) && typeof obj[pole] === 'object') {
            result = getDeepPropertiesCount(obj[pole]);
            count += result;
        }
    }
    return count;
};
const createSerializedObject = () => {
    return new String(JSON.stringify({age: this.age}));
};



const toBuffer = () => {};
const sortByProto = (array) => {
    array.sort(function(a,b){
        Object.getPrototypeOf(a) > Object.getPrototypeOf(b) ? true : false;
    });
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;