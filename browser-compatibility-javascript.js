//**********************************************01******************************************************************
//IE < 9 不支持Array的如下方法：map,forEach,filter,every,some,reduce,lastIndexOf,indexOf,reduceRight

//**********************************************02******************************************************************
//IE < 9 不支持String的如下方法：trim
//polyfill for trim as :
if (!String.prototype.trim){
	String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "");
    };
}

