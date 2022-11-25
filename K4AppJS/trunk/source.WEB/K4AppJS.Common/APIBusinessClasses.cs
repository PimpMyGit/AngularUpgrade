using IT4.Common.DB;
using IT4.Web.Authentication;
using System;
namespace K4AppJS
{
	public class APILoginService:AbstractLoginService
	{
		#region SubClasses
		#endregion
		public APILoginService ()
		{
		}
		public  override OAuthLogin CheckLoginCredentials (string username, string password, DBUtils dBUtils)
		{
			throw new NotImplementedException();
		}
	}
}
