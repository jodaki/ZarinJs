import React from 'react';

const Usersloder = () => {
    return Array(6).fill({}).map(()=>{
        return(
            <div className='col-4 mb-6' > 
                <div class="card-body">
                    
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-7 pictureHeader"></span>
                            <span class="placeholder col-6"></span>
                        </h5>
                    <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                    </p>
                        <a href="#" tabindex="-1" class="btn btn-sm btn-warning disabled placeholder col-6"></a>
                        <a href="#" tabindex="-1" class="btn btn-sm btn-danger disabled placeholder col-5 ms-1 "></a>
                </div>

                <style jsx>{
                    `
                    .pictureHeader{
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                        display: block;
                        margin: 0 0 10px 100px;
                    }
                    
                    `
                }</style>
            </div>    
        )
    });
}

export default Usersloder;
