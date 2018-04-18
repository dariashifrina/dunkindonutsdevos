import csv


by_boro = {
    'MANHATTAN': 0,
    'BROOKLYN': 0,
    'QUEENS': 0,
    'BRONX': 0,
    'STATEN ISLAND': 0
}

by_zip = {}

with open('clean_data.csv', 'rb') as f:
    reader = csv.reader(f)
    #skips header
    next(reader, None)
    for row in reader:
        if row[1] in by_boro: #there are a few without a boro designation
            by_boro[row[1]] += 1
        if row[4] in by_zip:
            by_zip[row[4]] += 1
        else:
            by_zip[row[4]] = 1

print by_zip
print by_boro
            
with open('violation_by_boro.csv', 'wb') as f:
    writer = csv.writer(f)
    writer.writerow(['borough', 'number of violations'])
    for key in by_boro:
        writer.writerow([key, by_boro[key]])

with open('violation_by_zipcode.csv', 'wb') as f:
    writer = csv.writer(f)
    writer.writerow(['zipcode', 'number of violations'])
    for key in by_zip:
        writer.writerow([key, by_zip[key]])
