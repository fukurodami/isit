import sqlite3
import eel


eel.init('front')


@eel.expose
def get_data(data):
    find_coun(data)


def find_coun(data):
    count = ''
    keys = 0
    countries = db_conn()
    for i in countries:
        k = i[3]
        keys_act = 0
        count_act = i[0]
        for j in data:
            if j in k:
                keys_act +=1
        if keys_act > keys:
            count = count_act
            keys = keys_act
    actual_count(count)
  
def actual_count(count):
    con = sqlite3.connect("coun.db")
    cur = con.cursor()
    res = cur.execute(f'select * from coun where title like "%{count}%";')
    value = res.fetchall()
    eel.get_data_of_count(value[0])

def db_conn():
    con = sqlite3.connect("coun.db")
    cur = con.cursor()
    res = cur.execute(f'select * from coun;')
    value = res.fetchall()
    return value



eel.start("main_page.html")

