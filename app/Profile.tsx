import Image from "next/image";
import RichText from "./RichText";
import Arrow12 from "./Arrow12";
import styles from "./Profile.module.css";
import Attachments from "./Attachments";

type ProfileProps = {
  cv: any,
};
const Profile: React.FC<ProfileProps> = ({
  cv
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.profilePhoto}>
          <Image src={cv.general.profilePhoto} alt="" width={92} height={92} />
        </div>
        <div className={styles.profileInfo}>
          <h1>{cv.general.displayName}</h1>
          <div className={styles.byline}>{cv.general.byline}</div>
          {cv.general.website ?
            <a className={styles.website}>{cv.general.website}</a>
          : null}
        </div>
      </div>

      {cv.general.about ?
        <section className={`${styles.profileSection} ${styles.about}`}>
          <h3>About</h3>
          <div className={styles.description}>
            <RichText text={cv.general.about}/>
          </div>
        </section>
      : null}

      {cv.allCollections.map((collection: any, index: number) => {
        return (
          <section className={styles.profileSection}>
            <h3>{collection.name}</h3>
            <div className={collection.name === "Contact" ? styles.contacts : styles.experiences}>
              {collection.items.map((experience: any, index: number) => {

                if (collection.name === "Contact") {
                  return <ContactItem key={experience.url} experience={experience}/>
                }

                return (
                  <ProfileItem key={experience.heading} experience={experience}/>
                )
              })}
            </div>
          </section>
        )
      })}
          <section data-print="true" style={{ opacity: 1 }}>
            <div className="ProfileWritingTabContent_writingTab__jRAyV">
              <div className="Profile_ProfileWritingTabContent_yearSection__ahazB__jH7fO">
                <h3>Writing 2024</h3> 
                <div className="ProfileWritingTabContent_pages__OjGhT">
                  <div className="ProfileWritingTabContent_pageRow__n3WhE">
                    <div className="ProfileWritingTabContent_dateMarker__VtkM3">
                      <div
                        className="ProfileWritingTabContent_dateContainer__hWY7c"
                        style={{ height: 67 }}
                      >
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/x32"
                        >
                          Dec 26
                        </a>
                      </div>
                    </div>
                    <div className="ProfileWritingTabContent_pageInfo____AWZ">
                      <div className="ProfileWritingTabContent_title__pJouF">
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/x32"
                        >
                          Behringer's X32 - my Approach to Innovation
                        </a>
                      </div>
                      <div className="ProfileWritingTabContent_date__1fhoG">
                        <span className="ProfileWritingTabContent_mobileDate__wvMVE">
                          <a
                            className="MegaLink_megalink__u_TFB"
                            data-hover="true"
                            href="https://read.cv/caterinaf/x32"
                          >
                            Dec 26
                          </a>
                          &nbsp;·&nbsp;{" "}
                        </span>
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/x32"
                        >
                          2 min read
                        </a>
                      </div>
                    </div>
                    <div className="ProfileWritingTabContent_thumbnailWrap__anQ0E">
                      <a
                        className="MegaLink_megalink__u_TFB"
                        data-hover="false"
                        href="https://read.cv/caterinaf/x32"
                      >
                        <img src="https://res.cloudinary.com/read-cv/image/upload/c_fill,h_90,w_152/dpr_2.0/v1/1/pages/wMys4ZM3UAQWN0vilHO24bWIWn12/uUYmyogvunOAnDfxXLro/thumbnail/f3010535-efb9-4509-b0e5-eafbd2bf377c.jpg?_a=DATAdtAAZAA0" />
                      </a>
                    </div>
                  </div>
                  <div className="ProfileWritingTabContent_pageRow__n3WhE">
                    <div className="ProfileWritingTabContent_dateMarker__VtkM3">
                      <div
                        className="ProfileWritingTabContent_dateContainer__hWY7c"
                        style={{ height: 67 }}
                      >
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/picea"
                        >
                          Dec 22
                        </a>
                      </div>
                    </div>
                    <div className="ProfileWritingTabContent_pageInfo____AWZ">
                      <div className="ProfileWritingTabContent_title__pJouF">
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/picea"
                        >
                          Picea - Monitoring Renewable Energy at Home
                        </a>
                      </div>
                      <div className="ProfileWritingTabContent_date__1fhoG">
                        <span className="ProfileWritingTabContent_mobileDate__wvMVE">
                          <a
                            className="MegaLink_megalink__u_TFB"
                            data-hover="true"
                            href="https://read.cv/caterinaf/picea"
                          >
                            Dec 22
                          </a>
                          &nbsp;·&nbsp;{" "}
                        </span>
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/picea"
                        >
                          4 min read
                        </a>
                      </div>
                    </div>
                    <div className="ProfileWritingTabContent_thumbnailWrap__anQ0E">
                      <a
                        className="MegaLink_megalink__u_TFB"
                        data-hover="false"
                        href="https://read.cv/caterinaf/picea"
                      >
                        <img src="https://res.cloudinary.com/read-cv/image/upload/c_fill,h_90,w_152/dpr_2.0/v1/1/pages/wMys4ZM3UAQWN0vilHO24bWIWn12/oBsYSh3i0FJJnC6xPfTM/thumbnail/a8554f3c-7288-421e-9008-164648d67cd5.jpg?_a=DATAdtAAZAA0" />
                      </a>
                    </div>
                  </div>
                  <div className="ProfileWritingTabContent_pageRow__n3WhE">
                    <div className="ProfileWritingTabContent_dateMarker__VtkM3">
                      <div
                        className="ProfileWritingTabContent_dateContainer__hWY7c"
                        style={{ height: 45 }}
                      >
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/infi"
                        >
                          Dec 20
                        </a>
                      </div>
                    </div>
                    <div className="ProfileWritingTabContent_pageInfo____AWZ">
                      <div className="ProfileWritingTabContent_title__pJouF">
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/infi"
                        >
                          inFi - Indoor Navigation App
                        </a>
                      </div>
                      <div className="ProfileWritingTabContent_date__1fhoG">
                        <span className="ProfileWritingTabContent_mobileDate__wvMVE">
                          <a
                            className="MegaLink_megalink__u_TFB"
                            data-hover="true"
                            href="https://read.cv/caterinaf/infi"
                          >
                            Dec 20
                          </a>
                          &nbsp;·&nbsp;{" "}
                        </span>
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/infi"
                        >
                          5 min read
                        </a>
                      </div>
                    </div>
                    <div className="ProfileWritingTabContent_thumbnailWrap__anQ0E">
                      <a
                        className="MegaLink_megalink__u_TFB"
                        data-hover="false"
                        href="https://read.cv/caterinaf/infi"
                      >
                        <img src="https://res.cloudinary.com/read-cv/image/upload/c_fill,h_90,w_152/dpr_2.0/v1/1/pages/wMys4ZM3UAQWN0vilHO24bWIWn12/twyWiB664ppnfKwIKwCm/thumbnail/78c81c8d-c0dc-4ec2-b70c-6f29bcaa2672.jpg?_a=DATAdtAAZAA0" />
                      </a>
                    </div>
                  </div>
                  <div className="ProfileWritingTabContent_pageRow__n3WhE">
                    <div className="ProfileWritingTabContent_dateMarker__VtkM3">
                      <div
                        className="ProfileWritingTabContent_dateContainer__hWY7c"
                        style={{ height: 67 }}
                      >
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/liverec"
                        >
                          Dec 2
                        </a>
                      </div>
                    </div>
                    <div className="ProfileWritingTabContent_pageInfo____AWZ">
                      <div className="ProfileWritingTabContent_title__pJouF">
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/liverec"
                        >
                          Live Rec – Redefining Music Composition with Everyday Sounds
                        </a>
                      </div>
                      <div className="ProfileWritingTabContent_date__1fhoG">
                        <span className="ProfileWritingTabContent_mobileDate__wvMVE">
                          <a
                            className="MegaLink_megalink__u_TFB"
                            data-hover="true"
                            href="https://read.cv/caterinaf/liverec"
                          >
                            Dec 2
                          </a>
                          &nbsp;·&nbsp;{" "}
                        </span>
                        <a
                          className="MegaLink_megalink__u_TFB"
                          data-hover="true"
                          href="https://read.cv/caterinaf/liverec"
                        >
                          3 min read
                        </a>
                      </div>
                    </div>
                    <div className="ProfileWritingTabContent_thumbnailWrap__anQ0E">
                      <a
                        className="MegaLink_megalink__u_TFB"
                        data-hover="false"
                        href="https://read.cv/caterinaf/liverec"
                      >
                        <img src="https://res.cloudinary.com/read-cv/image/upload/c_fill,h_90,w_152/dpr_2.0/v1/1/pages/wMys4ZM3UAQWN0vilHO24bWIWn12/4f83fyNLQHWhYzZ5F0Xs/thumbnail/6192666f-62fe-4868-8252-a6f854bd2f74.jpg?_a=DATAdtAAZAA0" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  );
};

type ProfileItemProps = {
  experience: any,
};
const ProfileItem: React.FC<ProfileItemProps> = ({
  experience
}) => {

  let title;
  if (experience.url) {
    title = <>
      <a href={experience.url} target="_blank">{experience.heading}</a><span className={styles.linkArrow}>&#xfeff;<Arrow12 fill="var(--grey1)"/></span>
    </>
  } else {
    title = experience.heading
  }
  return (
    <div className={styles.experience}>
      <div className={styles.year}>
        <span>{experience.year}</span>
      </div>
      <div className={styles.experienceContent}>
        <div className={styles.title}>
          {title}
        </div>
        {experience.location ?
        <div className={styles.location}>{experience.location}</div>
        : null}
        {experience.description ?
        <div className={styles.description}>
          <RichText text={experience.description}/>
        </div>
        : null}
        {experience.attachments && experience.attachments.length > 0 ?
          <Attachments attachments={experience.attachments}/>
        : null}
      </div>
    </div>
  )
}

type ContactItemProps = {
  experience: any,
};
const ContactItem: React.FC<ContactItemProps> = ({
  experience
}) => {
  return (
    <div className={styles.experience}>
      <div className={styles.year}>
        <span>{experience.platform}</span>
      </div>
      <div className={styles.experienceContent}>
        <div className={styles.title}>
          <a href={experience.url} target="_blank">{experience.handle}</a><span className={styles.linkArrow}>&#xfeff;<Arrow12/></span>
        </div>
      </div>
    </div>
  )
}

export default Profile;
