class Noutbuk { 
    constructor() {
        this.cost = function () {
            return 27000;
        }
    }
  }
  function NoutbukWithSSDdisk(nout) { 
    nout.hasSSDdisk = true;
    const prevCost = nout.cost();
    nout.cost = function () {
        return prevCost + 3250; 
      }
    }
    function NoutbukProzessorCeleron(nout) { 
        nout.hasProzessor = true;
        const prevCost = nout.cost();
        nout.cost = function () {
            return prevCost + 2150; 
        }
    }
    function NoutbukRAMfourGB(nout) { 
        nout.hasRazmer = true;
        const prevCost = nout.cost();
        nout.cost = function () {
            return prevCost + 2540; 
        }
    }
    function NoutbukMatovyDispley(nout) { 
        nout.hasOperativnayPamyt = true;
        const prevCost = nout.cost();
        nout.cost = function () {
            return prevCost + 3620; 
        }
    }
    const nout = new Noutbuk(); 
  console.log(nout.cost());
  NoutbukWithSSDdisk(nout);
  NoutbukProzessorCeleron(nout);
  NoutbukRAMfourGB(nout);
  NoutbukMatovyDispley(nout)
  console.log(nout.cost()); 
  
  