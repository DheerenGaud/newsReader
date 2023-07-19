import "./model.css"
export default ({setOpenModal,article:{description,publishedAt,source,url,title,urlToImage,content,author}}) => {
  
  const openInNewtab =()=>{
    window.open(url, '_blank');
  }
    return (

       <>
       {/* <div class="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New message</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="container d-flex flex-column gap-2">
                <div class="img-con mt-3">
                    <img class="" src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2000,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/v6bwf3e8qhdfhrgq7lv3/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg" alt=""/>
                </div>
                <div class="title my-3">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim ad. Error esse harum magnam doloremque, repellendus deleniti inventore animi.</h1>
                </div>
                <div class=" des m-1">
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, deserunt quae? Hic, ipsa similique expedita tenetur quod aspernatur incidunt error dolorum quas, a repellendus facilis sed, tempore ullam iure vitae! Vero amet nostrum, fugit soluta, fuga perspiciatis laudantium dignissimos, quibusdam iure accusamus rem. Ducimus autem necessitatibus iure explicabo, modi veniam voluptas distinctio alias accusamus atque minima quod ut quas, nostrum possimus nulla consequatur dolore, reiciendis eum magni totam fuga hic voluptates! Hic esse magni vitae repellat veritatis? Nam laboriosam doloribus, doloremque libero iure ut quas aliquid ex ducimus minus, voluptatibus adipisci id cum provident, totam repudiandae dolor quam accusantium! Nam, pariatur veritatis a dolorem eos ullam nemo accusantium laudantium provident recusandae enim soluta delectus blanditiis porro omnis inventore cum eum! Asperiores architecto obcaecati magnam harum eaque rem illo, quibusdam voluptas officiis placeat ut ea. Aspernatur quas placeat eaque, omnis sapiente laborum labore debitis esse, inventore ut facere ipsum asperiores ducimus vitae id beatae qui non quaerat nostrum iure maiores. Iste reiciendis quasi dolorem doloremque optio cumque iusto deleniti incidunt fugit? Ratione est nulla amet ea porro cum facilis iure cumque obcaecati doloribus incidunt, itaque animi nihil optio, magni commodi. Quo, distinctio atque! Fuga aliquid eum amet culpa non et, vero id a quasi recusandae enim quod ut voluptatibus illo mollitia quas asperiores temporibus architecto similique, aut fugit. Reprehenderit suscipit asperiores quam molestiae, illum itaque molestias magnam temporibus voluptatem tempora? Itaque nobis voluptatum cupiditate, sit nam suscip.</h4>
                </div>
                <div class="d-flex flex-row gap-2 my-3">
                  <div class="author">
                    <img src="https://assets.codepen.io/285131/author-3.png" alt=""/>
                  </div>
                  <div class="author-des d-flex flex-column">
                    <h1>David Sherof</h1>
                    <h2>Repoter</h2>
                  </div>

                </div>
                <hr class="m-3" />
                <div class="comments">
                  <h1>Comments</h1>
                </div>
                 <div class="com-input">
                  <div class="input-group mb-3 gap-3">
                    <input type="text" class="form-control rounded" placeholder="Comments here" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-primary rounded" type="button" id="button-addon2">Add</button>
                  </div>
                 </div>
                 <div class="d-flex flex-column gap-3">
                  <div class="d-flex flex-row gap-2">
                    <div class="com">
                      <img src="https://assets.codepen.io/285131/author-3.png" alt=""/>
                    </div>
                    <div class="com-des d-flex flex-column py-1">
                      <h1>Hello this is a test comment and this comment is particularly very long and it goes on and on and on.</h1>
                      <h2>on March 5th, 2014</h2>
                    </div>
                  </div>
                  <div class="d-flex flex-row gap-2">
                    <div class="com">
                      <img src="https://assets.codepen.io/285131/author-3.png" alt=""/>
                    </div>
                    <div class="com-des d-flex flex-column py-1">
                      <h1>Hello this is a test comment and this comment is particularly very long and it goes on and on and on.</h1>
                      <h2>on March 5th, 2014</h2>
                    </div>
                  </div>
                 </div>
             </div> 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div> */}
     

<div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div class="modal-content">
            <div class="modal-body">
              <div class="container d-flex flex-column gap-2">
                <div class="img-con mt-3">
                    <img class="" src={urlToImage||"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2000,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/v6bwf3e8qhdfhrgq7lv3/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg"} alt=""/>
                </div>
                <div>
                    {(new Date(publishedAt)).toDateString()}
                     <p>
                     source :  {source.name}
                      </p>
                </div>
                <div class="title my-3">
                    <h1>{title}</h1>
                </div>
                <div class=" des m-1">
                  <h4>{description}</h4>
                </div>
                <div class=" des m-1">
                  <h5>{content}</h5>
                </div>
                
                <div class="d-flex flex-row gap-2 my-3">
                <button class="btn btn-outline-primary rounded" onClick={openInNewtab} type="button" id="button-addon2">View More</button>
                  <div class="author">
                    <img src="https://assets.codepen.io/285131/author-3.png" alt=""/>
                  </div>
                  <div class="author-des d-flex flex-column">
                    <h1>{author}</h1>
                    <h2>Repoter</h2>
                  </div>
                </div>
                <hr class="m-3" />
                <div class="comments">
                  <h1>Comments</h1>
                </div>
                 <div class="com-input">
                  <div class="input-group mb-3 gap-3">
                    <input type="text" class="form-control rounded" placeholder="Comments here" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-primary rounded" type="button" id="button-addon2">Add</button>
                  </div>
                 </div>
             </div> 
            </div>
           
        </div>
      </div>
    </div>
       </>
    );
}
