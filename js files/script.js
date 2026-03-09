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
}

mainContainer.addEventListener('click', function(event){
  const parentNode = event.target.parentNode.parentNode;
  const chakrirName = parentNode.querySelector('.ChakrirName').innerText;
  console.log(chakrirName);
})
