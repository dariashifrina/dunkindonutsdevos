import csv


by_boro = {
    'MANHATTAN': 0,
    'BROOKLYN': 0,
    'QUEENS': 0,
    'BRONX': 0,
    'STATEN ISLAND': 0
}

by_zip = {}

by_year = [{},{},{},{},{},{},{},{}]

with open('clean_data.csv', 'rb') as f:
    reader = csv.reader(f)
    #skips header
    next(reader, None)
    for row in reader:
        boro = row[1]
        zipcode = row[4]
        year = int(row[6][-4:])
        if boro in by_boro: #there are a few without a boro designation
            by_boro[boro] += 1
        if zipcode in by_zip:
            by_zip[zipcode] += 1
        else:
            by_zip[zipcode] = 1
        if year in range(2012,2019):
            year -= 2012
            if row[4] in by_year[year]:
                by_year[year][zipcode] += 1
            else:
                by_year[year][zipcode] = 1


with open('violation_by_boro.csv', 'wb') as f:
    writer = csv.writer(f)
    writer.writerow(['borough', 'number_of_violations'])
    for key in by_boro:
        writer.writerow([key, by_boro[key]])

with open('violation_by_zipcode.csv', 'wb') as f:
    writer = csv.writer(f)
    writer.writerow(['zipcode', 'number_of_violations'])
    for key in by_zip:
        writer.writerow([key, by_zip[key]])

with open('2012.csv', 'wb') as f:
    writer = csv.writer(f)
    writer.writerow(['zipcode', 'number_of_violations'])
    for key in by_year[0]:
        writer.writerow([key, by_year[0][key]])

with open('2013.csv', 'wb') as f:
    writer = csv.writer(f)
    writer.writerow(['zipcode', 'number_of_violations'])
    for key in by_year[1]:
        writer.writerow([key, by_year[1][key]])
        
with open('2014.csv', 'wb') as f:
    writer = csv.writer(f)
    writer.writerow(['zipcode', 'number_of_violations'])
    for key in by_year[2]:
        writer.writerow([key, by_year[2][key]])
        
with open('2015.csv', 'wb') as f:
    writer = csv.writer(f)
    writer.writerow(['zipcode', 'number_of_violations'])
    for key in by_year[3]:
        writer.writerow([key, by_year[3][key]])
        
with open('2016.csv', 'wb') as f:
    writer = csv.writer(f)
    writer.writerow(['zipcode', 'number_of_violations'])
    for key in by_year[4]:
        writer.writerow([key, by_year[4][key]])
        
with open('2017.csv', 'wb') as f:
    writer = csv.writer(f)
    writer.writerow(['zipcode', 'number_of_violations'])
    for key in by_year[5]:
        writer.writerow([key, by_year[5][key]])
        
with open('2018.csv', 'wb') as f:
    writer = csv.writer(f)
    writer.writerow(['zipcode', 'number_of_violations'])
    for key in by_year[6]:
        writer.writerow([key, by_year[6][key]])
