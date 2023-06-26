import React from 'react';
import { Link } from 'react-router-dom';
import { LinkButton } from '../../components/Button/Button';
import { InnerBanner } from '../../components/InnerBanner/InnerBanner'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import './Blog.scss'

const Blog = () => {
	return (
		<>
			<InnerBanner
				title="Blog"
			/>
			<section className='repeat-section'>
				<div className='container'>
					<ul className='category-list'>
						<li><Link to="/" className='active'>All</Link></li>
						<li><Link to="/">Background Checks</Link></li>
						<li><Link to="/">KYC</Link></li>
						<li><Link to="/">Recruitment</Link></li>
						<li><Link to="/">Customer Stories</Link></li>
						<li><Link to="/">Compliance Laws</Link></li>
						<li><Link to="/">Awards</Link></li>
						<li><Link to="/">Announcements</Link></li>
						<li><Link to="/">Best Practices</Link></li>
					</ul>

					<div className='blog-row'>
						<h2>Featured Blog</h2>
						<Link to="" className='blog-bx horizontal-grid'>
							<div className='blog-img'>
								<img src="/images/blog-img1.jpg" alt="blog" />
							</div>
							<div className='blog-detail'>
								<h2>Mwangaza receives $3M Pre Seed Funding</h2>
								<ul>
									<li><img src="/images/calender-icon2.svg" alt="icon" /> May 3, 2022</li>
									<li><img src="/images/user-icon2.svg" alt="icon" /> John Smith</li>
								</ul>
								<p>Mwangaza has received funding to expand operations into West Africa.</p>
							</div>
						</Link>
					</div>
					<div className='blog-row'>
						<h2>Latest Blog</h2>
						<div className='row'>
							<div className='col-lg-6'>
								<Link to="/" className='blog-bx'>
									<div className='blog-img'>
										<img src="/images/blog-img1.jpg" alt="blog" />
									</div>
									<div className='blog-detail'>
										<p>Compliance Laws</p>
										<h2>Kenya enacts Data Protection Act</h2>
									</div>
								</Link>
							</div>
							<div className='col-lg-6'>
								<Link to="/" className='blog-bx'>
									<div className='blog-img'>
										<img src="/images/blog-img2.jpg" alt="blog" />
									</div>
									<div className='blog-detail'>
										<p>Compliance Laws</p>
										<h2>Kenya enacts Data Protection Act</h2>
									</div>
								</Link>
							</div>
							<div className='col-lg-6'>
								<Link to="/" className='blog-bx'>
									<div className='blog-img'>
										<img src="/images/blog-img3.jpg" alt="blog" />
									</div>
									<div className='blog-detail'>
										<p>Compliance Laws</p>
										<h2>Kenya enacts Data Protection Act</h2>
									</div>
								</Link>
							</div>
							<div className='col-lg-6'>
								<Link to="/" className='blog-bx'>
									<div className='blog-img'>
										<img src="/images/blog-img4.jpg" alt="blog" />
									</div>
									<div className='blog-detail'>
										<p>Compliance Laws</p>
										<h2>Kenya enacts Data Protection Act</h2>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='repeat-section bg-section' id='coverageSection'>
				<div className='container'>
					<SectionTitle
						title="Get started with Mwangaza"
						subHeading="Be ahead of the pack, Mwangaza is the smart way to provide KYC & Background check services,
						start your automation journey with us."
						className={'section-title-center'}
					/>
					<div className='text-center mb-5'>
						<LinkButton
							to="/signup"
							className="btn-secondary"
							text="Get Started"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Blog
