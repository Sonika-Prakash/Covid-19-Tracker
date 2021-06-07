from flask import Flask, render_template
import scrape

app = Flask(__name__)

@app.route('/')
def home():
    cases, cases_inc, active, active_dec, discharged, discharged_inc, deaths, deaths_inc, vaccines, vaccines_yday = scrape.scrape_stats()
    
    state_list, cured_list, death_list, active_list = scrape.scrape_table()
    
    news_list, dates_list, href_list = scrape.scrape_news()
    
    return render_template('index.html',
                           cases = cases,
                           active = active,
                           discharged = discharged,
                           deaths = deaths,
                           vaccines = vaccines,
                           cases_inc = cases_inc,
                           active_dec = active_dec,
                           discharged_inc = discharged_inc,
                           deaths_inc = deaths_inc,
                           vaccines_yday = vaccines_yday,
                           state_list = state_list,
                           cured_list = cured_list,
                           death_list = death_list,
                           active_list = active_list,
                           news_list = news_list,
                           dates_list = dates_list,
                           href_list = href_list)

@app.route('/faqs')
def faq():
    return render_template('faq.html')


if __name__ == "__main__":
    #Threaded option to enable multiple instances for multiple user access support
    app.run(threaded = True, debug = True)