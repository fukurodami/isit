let data_answer = []

function task(data, num) {
    data_answer.push(data)
    let tast_id = "#task_" + num
    let next_tast_id = "#task_" + (num + 1)
    let task_1 = document.querySelector(tast_id)
    task_1.style.display = "none"
    let task_2 = document.querySelector(next_tast_id)
    task_2.style.display = "block"
    if (num == 9){
        eel.get_data(data_answer)
    }
}

eel.expose(get_data_of_count)
function get_data_of_count(data){
    document.querySelector('#photo_count').src = data[2]
    document.querySelector('#title_count').textContent = data[0]
    document.querySelector('#desc_count').textContent = data[1]
}