using Newtonsoft.Json.Serialization;
using System;
using System.Web.Http;
using IT4.Web.Common;
using IT4.Common.Dictionary;
namespace K4AppJS
{
	public class K4AppJSApplication:CommonGlobal
	{
		#region SubClasses
		#endregion
		public K4AppJSApplication ():base()
		{
		}
		protected  void Session_Start (Object sender, EventArgs e)
		{
			Session["init"] = 0;
		}
		protected  override void Application_Start ()
		{
			base.Application_Start();
			GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new DefaultContractResolver();
			DictionaryType = DictionaryType.DB;
		}
		protected  override string PrivateKey
		{
		    get
		    {
		        return "7e252237-b6ab-421d-bc15-c13f592ffa23";
		    }
		}
	}
}
