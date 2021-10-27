/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var size = height.length;
        if(size === 1){return 0;}
        if(size === 2){return Math.min(height[0],height[1]) ;}
        
        var left = 0;
        var right = size-1;
        var max_area = 0;
        
        while(left != right){
            if(height[left] < height[right]){
                max_area = Math.max(max_area, height[left]*(right-left));
                left++;
            }
             else{
                 max_area = Math.max(max_area, height[right]*(right-left));
                 right--;
             }            
        }
       return max_area;
};