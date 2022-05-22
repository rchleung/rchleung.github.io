
  // Shortcut to get elements
  var el = function(element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

  var nine = function(number) {
    if (number == 0) {
      return 0;
    }
    
    var remainder = number % 9;
    if (remainder == 0) {
      return 9;
    }
    
    return remainder;
  }

  var calculate = function() {
    e.innerHTML = nine(aa.value);
    f.innerHTML = nine(bb.value);
    g.innerHTML = nine(cc.value);
    h.innerHTML = nine(dd.value);

    i.innerHTML = nine(e.innerHTML+f.innerHTML);
    j.innerHTML = nine(g.innerHTML+h.innerHTML);
    k.innerHTML = nine(i.innerHTML+j.innerHTML);
    l.innerHTML = nine(j.innerHTML+k.innerHTML);
    m.innerHTML = nine(i.innerHTML+k.innerHTML);
    n.innerHTML = nine(l.innerHTML+m.innerHTML);

    o.innerHTML = nine(e.innerHTML+i.innerHTML);
    p.innerHTML = nine(f.innerHTML+i.innerHTML);
    q.innerHTML = nine(o.innerHTML+p.innerHTML);

    r.innerHTML = nine(g.innerHTML+j.innerHTML);
    s.innerHTML = nine(h.innerHTML+j.innerHTML);
    t.innerHTML = nine(r.innerHTML+s.innerHTML);

    u.innerHTML = nine(e.innerHTML+k.innerHTML+h.innerHTML);
    v.innerHTML = nine(q.innerHTML+n.innerHTML+t.innerHTML);
    w.innerHTML = nine(k.innerHTML*2);
  };

  // Add click event to calculate button
  el("#calculate").onclick = calculate