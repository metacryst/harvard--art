# Project Proposal

## Project Description

Using the Harvard Museum API, create an art gallery for the user to view. Allow them to click an installation in order to get more information about it.

## Wireframes

### Home (Gallery)

![Gallery](https://user-images.githubusercontent.com/61888181/80388104-15fef800-886f-11ea-8410-dbb9efacdc12.jpg)

### Movie Details

![About Page](https://user-images.githubusercontent.com/61888181/80388111-19927f00-886f-11ea-8eef-89fe64058dbe.jpg)

### MVP User Stories

_**MVP User Stories**_
- _"As a user, I want to see art without catching a virus”_
- _"As a user, I want to be able to continuously generate new art by clicking a button”_
- _"As a user, I want to be able to learn more about the art that interests me by clicking on it”_

## API

[Harvard Art Museum API]("https://api.harvardartmuseums.org")

#### Sample API Response
```{info: {…}, records: Array(10)}
info: {totalrecordsperquery: 10, totalrecords: 50932, pages: 5094, page: 1, next: "https://api.harvardartmuseums.org/object?q=totalpa…pikey=038ebf20-87f7-11ea-8c88-97e5b91498c3&page=2"}
records: Array(10)
0: {accessionyear: null, technique: null, mediacount: 0, edition: null, totalpageviews: 0, …}
1:
      accessionmethod: "Purchase"
      accessionyear: 1984
      accesslevel: 1
      century: "3rd millennium BCE"
      classification: "Fragments"
      classificationid: 94
      colorcount: 0
      commentary: null
      contact: "am_asianmediterranean@harvard.edu"
      contextualtextcount: 0
      copyright: null
      creditline: "Harvard Art Museums/Arthur M. Sackler Museum, Ernest B. and Helen Pratt Dane Fund for the Acquisition of           Oriental Art in honor of Professor Max Loehr"
      culture: "Chinese"
      datebegin: 0
      dated: "3rd millennium BCE"
      dateend: 0
      dateoffirstpageview: null
      dateoflastpageview: null
      department: "Department of Asian Art"
      description: null
      dimensions: "25.5 x 9.3 cm (10 1/16 x 3 11/16 in.)"
      division: "Asian and Mediterranean Art"
      edition: null
      exhibitioncount: 0
      groupcount: 0
      id: 201666
      imagecount: 1
      imagepermissionlevel: 0
      images: Array(1)
      0:
      baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:CARP14067_dynmc"
      copyright: "President and Fellows of Harvard College"
      displayorder: 1
      format: "image/jpeg"
      height: 555
      idsid: 18727717
      iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/18727717"
      imageid: 50215
      publiccaption: null
      renditionnumber: "CARP14067"
      width: 1024
      __proto__: Object
      length: 1
      __proto__: Array(0)
      labeltext: null
      lastupdate: "2020-04-26T06:40:39-0400"
      markscount: 0
      mediacount: 0
      medium: "Blackened gray earthenware"
      objectid: 201666
      objectnumber: "1984.135"
      peoplecount: 0
      period: "Neolithic period, Liangzhu culture, c. 3300-2200 BCE"
      periodid: 1339
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:CARP14067_dynmc"
      provenance: null
      publicationcount: 0
      rank: 104939
      relatedcount: 0
      seeAlso: [{…}]
      signed: null
      standardreferencenumber: null
      state: null
      style: null
      technique: null
      techniqueid: null
      title: "Fragment of the Stem of a Pedestalled Vessel, the Stem with Paired Horizontal Lines in Relief and with Small              Circular Perforations"
      titlescount: 1
      totalpageviews: 0
      totaluniquepageviews: 0
      url: "https://www.harvardartmuseums.org/collections/object/201666"
      verificationlevel: 0
      verificationleveldescription: "Unchecked. Object information has not been verified for completeness and has not been              vetted"
      worktypes: [{…}]
      __proto__: Object
2: {accessionyear: 1984, technique: null, mediacount: 0, edition: null, totalpageviews: 0, …}
3: {accessionyear: 1984, technique: null, mediacount: 0, edition: null, totalpageviews: 0, …}
4: {accessionyear: 1984, technique: null, mediacount: 0, edition: null, totalpageviews: 0, …}
5: {accessionyear: null, technique: "Negative, gelatin silver (35mm film)", mediacount: 0, edition: null, totalpageviews: 0, …}
6: {accessionyear: 1968, technique: null, mediacount: 0, edition: null, totalpageviews: 0, …}
7: {accessionyear: 1968, technique: "Blue-and-white ware", mediacount: 0, edition: null, totalpageviews: 0, …}
8: {accessionyear: 1968, technique: null, mediacount: 0, edition: null, totalpageviews: 0, …}
9: {accessionyear: 1967, technique: null, mediacount: 0, edition: null, totalpageviews: 0, …}
length: 10

```

## Component Hierarchy

![Component Hierarchy](https://user-images.githubusercontent.com/61888181/80388116-1bf4d900-886f-11ea-92ab-74ef89127bd3.jpg)

#### OPTIONAL Component Details
| Component | Description | State/Props
| --- | --- | :---: |
| App | This will make the initial data request and include React Router | State |
| About | This will render the about page | Props |
| Arts | This will render all of the art pieces | Props |
| Art | This will render an individual art piece | Props |
