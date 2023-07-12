using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace partymanagmentsystem.Controllers
{
    public class zoneController : Controller
    {
        // GET: zone
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult New()
        {
            return View();
        }

        public ActionResult edit(int id)
        {
            return View();
        }

        //[HttpPost]
        //public ActionResult New()
        //{
        //    return View();
        //}
    }
}