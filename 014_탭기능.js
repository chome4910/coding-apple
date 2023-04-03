/*
버튼0 누르면
-모든버튼에 붙은 orange 클래스명 제거
-버튼0에 orange 클래스명 추가
-모든 div에 붙은 show 클래스명 제거
-div에 show 클래스명 추가
*/

// $('.tab-button').eq(0).on('click',function(){
//     $('.tab-button').removeClass('orange')
//     $('.tab-button').eq(0).addClass('orange')
//     $('.tab-content').removeClass('show')
//     $('.tab-content').eq(0).addClass('show')
// })

// $('.tab-button').eq(1).on('click',function(){
//     $('.tab-button').removeClass('orange')
//     $('.tab-button').eq(1).addClass('orange')
//     $('.tab-content').removeClass('show')
//     $('.tab-content').eq(1).addClass('show')
// })

// $('.tab-button').eq(2).on('click',function(){
//     $('.tab-button').removeClass('orange')
//     $('.tab-button').eq(2).addClass('orange')
//     $('.tab-content').removeClass('show')
//     $('.tab-content').eq(2).addClass('show')
// })

let 버튼 = $('.tab-button')
let 컨텐츠 = $('.tab-content')

for(let i = 0 ; i <= $('.tab-button').length ; i++){
$('.tab-button').eq(i).on('click',function(){
    버튼.removeClass('orange')
    버튼.eq(i).addClass('orange')
    컨텐츠.removeClass('show')
    컨텐츠.eq(i).addClass('show')
})}
