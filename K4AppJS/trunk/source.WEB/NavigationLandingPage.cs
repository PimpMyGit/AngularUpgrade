using IT4.Web.Common;
namespace K4AppJS
{
	public abstract class NavigationLandingPage
	{
		#region SubClasses
		#endregion
		public NavigationLandingPage ()
		{
		}
		public  virtual void RedirectToPage (ref NavigationResult result)
		{
		}
		public  void ClearQueryStringParams ()
		{
			ApplicationPrivateSession.Current.QueryStringParams.Params = null;
			ApplicationPrivateSession.Current.UserInfo.StartPage = null;
		}
	}
}
