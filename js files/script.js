let interviewList = [];
let rejectList = [];


let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectCount = document.getElementById('rejectCount');
console.log(total);

const allCardSection = document.getElementById('allCard');

const mainContainer = document.querySelector('main');
console.log(mainContainer);

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const filteredSection = document.getElementById('filtered-section');


function calculateCount(){
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = rejectList.length;
}
calculateCount();

function toogleStyle(id){
  allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');
  interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');
  rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');

  allFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
  interviewFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
  rejectedFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');


  console.log(id);

  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]');
  selectedBtn.classList.add('bg-[#3B82F6]', 'text-[#FFFFFF]');


  if(id == 'interview-filter-btn'){
    allCardSection.classList.add('hidden');
    filteredSection.classList.remove('hidden');
}
  else if(id == 'all-filter-btn'){
    allCardSection.classList.remove('hidden');
    filteredSection.classList.add('hidden');
  }
   
}

mainContainer.addEventListener('click', function(event){

  console.log(event.target.classList.contains('interview-btn'))

 if (event.target.classList.contains('interview-btn')){
   const parentNode = event.target.parentNode.parentNode;
  const chakrirName = parentNode.querySelector('.ChakrirName').innerText;
  const developerType = parentNode.querySelector('.developerType').innerText;
  const salaryDollar = parentNode.querySelector('.salaryDollar').innerText;
  const applicableBtn = parentNode.querySelector('.applicableBtn').innerText;
  const jobDescription = parentNode.querySelector('.jobDescription').innerText;
  

  const cardInfo = { chakrirName, developerType, salaryDollar, applicableBtn : 'Interview', jobDescription };
  const jobExist = interviewList.find(item => item.chakrirName == cardInfo.chakrirName);

  parentNode.querySelector('.applicableBtn').innerText = 'Interview';

  if(!jobExist){
    interviewList.push(cardInfo);
  }

  renderInterview()
  
 }
})


function renderInterview(){
filteredSection.innerHTML = '';



for(let interview of interviewList){
  
  console.log(interview);
  
  let div = document.createElement('div');
  div.className = 'flex justify-between p-[24px] bg-[#FFFFFF] rounded-xl mt-[24px]'
  div.innerHTML = ` <!-- main part-1 -->
          <div>
            <div>
              <h1 class="ChakrirName font-semibold text-[18px] text-[#002C5C]">${interview.chakrirName}</h1>
              <p class="developerType text-[#64748B]">React Native Developer</p>
              <p class="salaryDollar text-[#64748B] mt-[20px]">Remote • Full-time • $130,000 - $175,000</p>
            </div>
            <p  class="applicableBtn text-[14px] font-medium p-[12px] bg-[#EEF4FF] w-[200px] rounded-xl text-center mt-[20px]">${interview.applicableBtn}</p>
            <p class="jobDescription font-[14px] font-regular text-[#323B49] mt-[8px]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
            <div class="mt-[20px]">
              <button class="font-[14px] font-semibold text-[#10B981] bg-[#FFFFFF] p-[12px] rounded-xl border border-[#10B981] mr-[8px]" id="interview-btn">INTERVIEW</button>
              <button class="font-[14px] font-semibold text-[#EF4444] bg-[#FFFFFF] p-[12px] rounded-xl border border-[#EF4444]" id="rejected-btn">REJECTED</button>
            </div>
          </div>

          <!-- main part-2 -->
          <div>
            <button class="dlt-btn"><i class="fas fa-trash"></i></button>
          </div>`

  filteredSection.appendChild(div);
} 
}