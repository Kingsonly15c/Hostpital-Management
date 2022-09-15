
export default function button(props){ 
    const {title, type, action} = props;

    function checkType () {
       if (type == 'danger') {
            return `bg-[#fa0728] text-[#ffffff]`
        }else if (type == 'calmness') {
            return `bg-[#3141f5]`
        }else if (type == 'growth') {
            return `bg-[#31f56c]` 
        }else if (type == 'progress') {
            return `bg-[#c1f531]` 
        };
    }
    return (
        <div>
            <button className={checkType()} onClick={action}>{title}</button>
        </div>
    );
        
    }  
        

    
   
