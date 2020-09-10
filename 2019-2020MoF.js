function moreFun(Names) {
    this.fetch("classes.json")
      .then(x => x.text())
      .then(JSON.parse)
      .then(data => {
      if(document.getElementById(Names).value != "") {
       var stuff = data.Bachelors2019[0].Name
       i = 0
       while(stuff != document.getElementById(Names).value) {
        i++
        stuff = data.Bachelors2019[i].Name
       }
       for(x = 0; x < data.Bachelors2019[i].all.length; x++) {
        goodtogo = 0
        for (y = 0; y < count; y++) {  
          if(nodes.get(y).label == data.Bachelors2019[i].all[x]) {
            console.log(nodes.get(y).label)
            console.log(data.Bachelors2019[i].all[x])
            goodtogo = 1
          }
        }
        if (goodtogo == 0) {
          nodes.add([{id: count, label: data.Bachelors2019[i].all[x], hidden: false}])
          list.push(data.Bachelors2019[i].all[x])
          count++
          if(z == -1) {
            z = 1
          }
          else {
            z++
          }
        }
       }
       for(x = 0; x < data.Bachelors2019[i].or.length; x++) {
          goodtogo = 0
          for (y = 0; y < count; y++) {
            if(nodes.get(y).label == data.Bachelors2019[i].or[x]) {
              goodtogo = 1
            }
          }
          if (goodtogo == 0) {
            nodes.add([{id: count, label: data.Bachelors2019[i].or[x], hidden: false, shape: "hexagon"}])
            list.push(data.Bachelors2019[i].or[x])
            count++
            if(z == -1) {
              z = 1
            }
            else {
              z++
            } 
          }
       }
       for(x = 0; x < data.Bachelors2019[i].Choose.length; x++) {
          if(data.Bachelors2019[i].Choose[x].kind == "Choose 3") {
            for(y = 0; y < data.Bachelors2019[i].Choose[x].Courses.length; y++) {
              goodtogo = 0
              for (pi = 0; pi < count; pi++) {
                if(nodes.get(pi).label == data.Bachelors2019[i].Choose[x].Courses[y] + " 3") {
                  goodtogo = 1
                }
              }
              if (goodtogo == 0) {
                nodes.add([{id: count, label: data.Bachelors2019[i].Choose[x].Courses[y] + " 3", hidden: false, shape: "star"}])
                list.push(data.Bachelors2019[i].Choose[x].Courses[y])
                count++
                if(z == -1) {
                 z = 1
                }
                else {
                 z++
              }
            }
          }
         }
         else if(data.Bachelors2019[i].Choose[x].kind == "Choose 1") {
            for(y = 0; y < data.Bachelors2019[i].Choose[x].Courses.length; y++) {
              goodtogo = 0
              for (pi = 0; pi < count; pi++) {
                if(nodes.get(pi).label == data.Bachelors2019[i].Choose[x].Courses[y] + " 1") {
                  goodtogo = 1
                }
              }
              if (goodtogo == 0) {
                nodes.add([{id: count, label: data.Bachelors2019[i].Choose[x].Courses[y] + " 1", hidden: false, shape: "star", color:{background:"red"}}])
                list.push(data.Bachelors2019[i].Choose[x].Courses[y])
                count++
                if(z == -1) {
                  z = 1
                }
                else {
                  z++
              }
            }
          }
         }
         else if(data.Bachelors2019[i].Choose[x].kind == "Choose 6") {
            for(y = 0; y < data.Bachelors2019[i].Choose[x].Courses.length; y++) {
              goodtogo = 0
              for (pi = 0; pi < count; pi++) {
                if(nodes.get(pi).label == data.Bachelors2019[i].Choose[x].Courses[y] + " 6") {
                  goodtogo = 1
                }
              }
              if (goodtogo == 0) {
                nodes.add([{id: count, label: data.Bachelors2019[i].Choose[x].Courses[y] + " 6", hidden: false, shape: "star", color:{background:"orange"}}])
                list.push(data.Bachelors2019[i].Choose[x].Courses[y])
                count++
                if(z == -1) {
                  z = 1
                }
                else {
                  z++
                }
            }
          }
         }
         else if(data.Bachelors2019[i].Choose[x].kind == "Choose 9") {
            for(y = 0; y < data.Bachelors2019[i].Choose[x].Courses.length; y++) {
              goodtogo = 0
              for (pi = 0; pi < count; pi++) {
                if(nodes.get(pi).label == data.Bachelors2019[i].Choose[x].Courses[y] + " 9") {
                  goodtogo = 1
                }
              }
              if (goodtogo == 0) {
                nodes.add([{id: count, label: data.Bachelors2019[i].Choose[x].Courses[y] + " 9", hidden: false, shape: "star", color:{background:"brown"}}])
                list.push(data.Bachelors2019[i].Choose[x].Courses[y])
                count++
                if(z == -1) {
                  z = 1
                }
                else {
                  z++
                }
              }
            }
          }
         else if(data.Bachelors2019[i].Choose[x].kind == "Choose 12") {
            for(y = 0; y < data.Bachelors2019[i].Choose[x].Courses.length; y++) {
              goodtogo = 0
              for (pi = 0; pi < count; pi++) {
                if(nodes.get(pi).label == data.Bachelors2019[i].Choose[x].Courses[y] + " 12") {
                  goodtogo = 1
                }
              }
              if (goodtogo == 0) {
                nodes.add([{id: count, label: data.Bachelors2019[i].Choose[x].Courses[y] + " 12", hidden: false, shape: "star", color:{background:"green"}}])
                list.push(data.Bachelors2019[i].Choose[x].Courses[y])
                count++
                if(z == -1) {
                  z = 1
                }
                else {
                  z++
                }
              }
            }
          }
      }
  
      for(x = 0; x < data.Bachelors2019[i].Pre.length; x++) {
          y = 0
          stuff = data.Bachelors2019[y].Name
          while(stuff != data.Bachelors2019[i].Pre[x]) {
            y++
            stuff = data.Bachelors2019[y].Name
          }
          for(b = 0; b < data.Bachelors2019[y].all.length; b++) {
            goodtogo = 0
            for (pi = 0; pi < count; pi++) {
                if(nodes.get(pi).label == data.Bachelors2019[y].all[b]) {
                  goodtogo = 1
                }
              }
            if (goodtogo == 0) {
              nodes.add([{id: count, label: data.Bachelors2019[y].all[b], hidden: false}])
              list.push(data.Bachelors2019[y].all[b])
              count++
              if(z == -1) {
                z = 1
              }
              else {
                z++
              }
            }
          }
         for(b = 0; b < data.Bachelors2019[y].Choose.length; b++) {
          if(data.Bachelors2019[y].Choose[b].kind == "Choose 3") {
            for(a = 0; a < data.Bachelors2019[y].Choose[b].Courses.length; a++) {
              goodtogo = 0
              for (pi = 0; pi < count; pi++) {
                if(nodes.get(pi).label == data.Bachelors2019[y].all[b] + " 3") {
                  goodtogo = 1
                }
              }
              if (goodtogo == 0) {
                nodes.add([{id: count, label: data.Bachelors2019[y].Choose[b].Courses[a] + " 3", hidden: false, shape: "star", color:{background:"purple"}}])
                list.push(data.Bachelors2019[y].Choose[b].Courses[a])
                count++
                if(z == -1) {
                  z = 1
                }
                else {
                  z++
                }
              }
            }
          }
         }
      }
      for(y = 0; y < data.Bachelors2019[i].MajorElectives.length; y++) {
         if(data.Bachelors2019[i].MajorElectives[y].Amount == "6") {
          for(x = 0; x < data.Bachelors2019[i].MajorElectives[y].Courses.length; x++) {
            goodtogo = 0
            for (pi = 0; pi < count; pi++) {
                if(nodes.get(pi).label == data.Bachelors2019[i].MajorElectives[y].Courses[x].kind + " " + data.Bachelors2019[i].MajorElectives[y].Courses[x].level) {
                  goodtogo = 1
                }
              }
            if (goodtogo == 0) {
              nodes.add([{id: count, label: data.Bachelors2019[i].MajorElectives[y].Courses[x].kind + " " + data.Bachelors2019[i].MajorElectives[y].Courses[x].level, hidden: false, shape: "box"}])
              count++
              if(z == -1) {
                z = 1
              }
              else {
                z++
              }
            }
          }
         }
          else if(data.Bachelors2019[i].MajorElectives[y].Amount == "3") {
          for(x = 0; x < data.Bachelors2019[i].MajorElectives[y].Courses.length; x++) {
            goodtogo = 0
            for (pi = 0; pi < count; pi++) {
                if(nodes.get(pi).label == data.Bachelors2019[i].MajorElectives[y].Courses[x].kind + " " + data.Bachelors2019[i].MajorElectives[y].Courses[x].level) {
                  goodtogo = 1
                }
              }
            if (goodtogo == 0) {
              nodes.add([{id: count, label: data.Bachelors2019[i].MajorElectives[y].Courses[x].kind + " " + data.Bachelors2019[i].MajorElectives[y].Courses[x].level, hidden: false, shape: "box", color:{background:"red"}}])
              count++
              if(z == -1) {
                z = 1
              }
              else {
                z++
              }
            }
          }
         }
         else if(data.Bachelors2019[i].MajorElectives[y].Amount == "9") {
          for(x = 0; x < data.Bachelors2019[i].MajorElectives[y].Courses.length; x++) {
            goodtogo = 0
            for (pi = 0; pi < count; pi++) {
                if(nodes.get(pi).label == data.Bachelors2019[i].MajorElectives[y].Courses[x].kind + " " + data.Bachelors2019[i].MajorElectives[y].Courses[x].level) {
                  goodtogo = 1
                }
              }
            if (goodtogo == 0) {
              nodes.add([{id: count, label: data.Bachelors2019[i].MajorElectives[y].Courses[x].kind + " " + data.Bachelors2019[i].MajorElectives[y].Courses[x].level, hidden: false, shape: "box", color:{background:"green"}}])
              count++
              if(z == -1) {
                z = 1
              }
              else {
                z++
              }
            }
          }
         }
         if(data.Bachelors2019[i].MajorElectives[y].Amount == "4-7") {
          for(x = 0; x < data.Bachelors2019[i].MajorElectives[y].Courses.length; x++) {
            goodtogo = 0
            for (pi = 0; pi < count; pi++) {
                if(nodes.get(pi).label == data.Bachelors2019[i].MajorElectives[y].Courses[x].kind + " " + data.Bachelors2019[i].MajorElectives[y].Courses[x].level) {
                  goodtogo = 1
                }
              }
            if (goodtogo == 0) {
              nodes.add([{id: count, label: data.Bachelors2019[i].MajorElectives[y].Courses[x].kind + " " + data.Bachelors2019[i].MajorElectives[y].Courses[x].level, hidden: false, shape: "box", color:{background:"brown"}}])
              count++
              if(z == -1) {
                z = 1
              }
              else {
                z++
              }
            }
          }
         }
       }
       nodes.add([{id: count, label: data.Bachelors2019[i].Electives, hidden: false, color:{background: "white", border:"black"}}])
       count++
              if(z == -1) {
                z = 1
              }
              else {
                z++
              }
       for(x = 0; x < list.length; x++) {
          for(catc = 0; catc < data.CourseList.length; catc++) {
              if(data.CourseList[catc].CourseNum == list[x]) {
                  numList.push(catc)
                  for(j = 0; j < data.CourseList[catc].Prerequisites.length; j++) {
                      if(data.CourseList[catc].Prerequisites[j].kind == "Consent") {
                          nodes.update([{id: x, color: {background:'red'}}])
                      } 
                      else if(data.CourseList[catc].Prerequisites[j].kind == "Senior") {
                          nodes.update([{id: x, color: {background:'blue'}}])
                      }
                      else if(data.CourseList[catc].Prerequisites[j].kind == "Sophmore") {
                          nodes.update([{id: x, color: {background:'yellow'}}])
                      }        
                      else if(data.CourseList[catc].Prerequisites[j].kind == "BOR") {
                          nodes.update([{id: x, color: {background:'orange'}}])
                      }        
                      else if(data.CourseList[catc].Prerequisites[j].kind == "special") {
                          for(cu = 0; cu < data.CourseList[catc].Prerequisites[j].courses.length; cu++) {
                              nodes.update([{id: x, label: nodes.get(x).label + '\n' + data.CourseList[catc].Prerequisites[j].courses[cu], color: {background:'purple'}}])
                          }
                      }
                      else if(data.CourseList[catc].Prerequisites[j].kind == "Credits") {
                      for(cu = 0; cu < data.CourseList[catc].Prerequisites[j].courses.length; cu++) {
                          nodes.update([{id: x, label: nodes.get(x).label + '\n' + data.CourseList[catc].Prerequisites[j].courses[cu] + " Credits", color: {background:'pink'}}])
                      }
                      }
                      else {
                      for(k = 0; k < data.CourseList[catc].Prerequisites[j].courses.length; k++) {
                      for(l = 0; l < list.length; l++) {
                          if(list[l] == data.CourseList[catc].Prerequisites[j].courses[k]) {
                              if(data.CourseList[catc].Prerequisites[j].kind == "any") {
                                  edges.add([{id: e, from: l, to: x, arrows: "to", dashes: true}]) 
                                  nodes.update([{id: x, hidden: true, hide: true}])
                                  nodes.update([{id: l, hide: true}])
                              }                
                              else if(data.CourseList[catc].Prerequisites[j].kind == "sany") {
                                  edges.add([{id: e, from: l, to: x, arrows: "to", dashes: true, color: 'brown'}])
                                  nodes.update([{id: x, hidden: true, hide: true}])
                                  nodes.update([{id: l, hide: true}])
  
                              }
                              else if(data.CourseList[catc].Prerequisites[j].kind == "C all") {
                                  edges.add([{id: e, from: l, to: x, arrows: "to", dashes: true, color:'green'}])
                                  nodes.update([{id: x, hidden: true, hide: true}])
                                  nodes.update([{id: l, hide: true}])
  
                              }
                              else if(data.CourseList[catc].Prerequisites[j].kind == "C any") {
                                  edges.add([{id: e, from: l, to: x, arrows: "to", color:'green'}])                 
                                  nodes.update([{id: x, hidden: true, hide: true}])
                                  nodes.update([{id: l, hide: true}])
  
                              }              
                              else if(data.CourseList[catc].Prerequisites[j].kind == "core") {
                                  edges.add([{id: e, from: l, to: x, arrows: "to", color:'red'}]) 
                                  nodes.update([{id: x, hidden: true, hide: true}])
                                  nodes.update([{id: l, hide: true}])
                              }
                              else if(data.CourseList[catc].Prerequisites[j].kind == "core/or") {
                                  edges.add([{id: e, from: l, to: x, arrows: "to", dashes: true, color:'pink'}])
                                  nodes.update([{id: x, hidden: true, hide: true}])
                                  nodes.update([{id: l, hide: true}])
                              }
                              else {
                                  edges.add([{id: e, from: l, to: x, arrows: "to"}])
                                  nodes.update([{id: x, hidden: true, hide: true}])
                                  nodes.update([{id: l, hide: true}])
                              }
                              e++
                          }
                      }
                      }
                      }
                  }
              }
              }
         }
         for(j = 0; j < list.length; j++) {
           for(k = 0; k < data.CourseList[numList[j]].Corequisite.length; k++) {
            for(l = 0; l < list.length; l++) {
              if(data.CourseList[numList[j]].Corequisite[k] == list[l]) {
                fact = 0
                for(m = 0; m < edges.length; m++) {
                  if((edges.get(m).to == l && edges.get(m).from == j) || (edges.get(m).to == j && edges.get(m).from == l))
                    fact = 1
                }
                if(fact == 0) {
                edges.add([{id: e, from: l, to: j, color: {background: 'cyan'}}])
                console.log("Added edge from " + l + " to " + j)
                console.log(list)
                e++}
              }
            }
           }
         }
      }});
  }