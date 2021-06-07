import requests
from bs4 import BeautifulSoup

def getContent():
    url = "https://www.mygov.in/covid-19"
    r = requests.get(url)
    content = "";
    if r.status_code == 200:
        content = r.text
    return content

def getContent1():
    url = "https://www.mohfw.gov.in/"
    r = requests.get(url)
    content = "";
    if r.status_code == 200:
        content = r.text
    return content

def scrape_stats():
    cont = getContent()
    soup = BeautifulSoup(cont, 'html.parser')
    
    cases_cont = soup.find('div', {"class": "iblock t_case"})
    cases = cases_cont.span.getText()
    print("total cases:", cases)
    cases_inc = cases_cont.find('div', {"class": "color-red up-arrow"}).getText().strip()
    print(cases_inc)
    
    discharged_cont = soup.find('div', {"class": "iblock discharge"})
    discharged = discharged_cont.span.getText()
    print("Dsicharged:", discharged)
    discharged_inc = discharged_cont.find('div', {"class": "color-green up-arrow"}).getText().strip()
    print(discharged_inc)
    
    deaths_cont = soup.find('div', {"class": "iblock death_case"})
    deaths = deaths_cont.span.getText()
    print("deaths:", deaths)
    deaths_inc = deaths_cont.find('div', {"class": "color-red up-arrow"}).getText().strip()
    print(deaths_inc)
    
    active_cont = soup.find('div', {"class": "active-case"})
    active = active_cont.span.getText()
    print("active:", active)
    active_dec = active_cont.find('div', {"class": "color-green down-arrow"}).getText().strip()
    print(active_dec)
    
    vaccines_cont = soup.find('div', {"class": "total-vcount"})
    vaccines = vaccines_cont.strong.getText()
    print("vaccines:", vaccines)
    vaccines_yday = soup.find('div', {"class": "yday-vcount"}).strong.getText()
    print(vaccines_yday)
    
    
    
    
    return cases, cases_inc, active, active_dec, discharged, discharged_inc, deaths, deaths_inc, vaccines, vaccines_yday

    
def scrape_table():
    url = "https://www.mohfw.gov.in/data/datanew.json"
    r = requests.get(url)
    data = r.json()
    
    active_list = []
    cured_list = []
    death_list = []
    state_list = []
    
    for row in data:
        state_list.append(row['state_name'])
        active_list.append(row['new_active'])
        cured_list.append(row['new_cured'])
        death_list.append(row['new_death'])
        
    return state_list, cured_list, death_list, active_list
    

def scrape_news():
    cont = getContent1()
    soup = BeautifulSoup(cont, 'html.parser')
    
    news_list = []
    dates_list = []
    href_list = []
    news = soup.find_all('div', {"class": "col-lg-4 col-md-4 col-sm-6 col-xs-12"})
    
    for i in range(len(news)):
        dates_list.append(news[i].find('div', {"class": "update-box"}).strong.getText())
        news_list.append(news[i].find('div', {"class": "update-box"}).a.getText().strip())
        href_list.append(news[i].find('div', {"class": "update-box"}).a['href'])
        
    return news_list, dates_list, href_list
    
